#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use sysinfo::{ProcessExt, System, SystemExt};
use std::fs;
use std::path::Path;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct Response {
    success: bool,
    message: String,
}

#[tauri::command]
fn kill_capcut() -> Response {
    let mut s = System::new_all();
    s.refresh_processes();
    
    let mut killed = false;
    for (pid, process) in s.processes() {
        if process.name().to_lowercase().contains("capcut") {
            process.kill();
            killed = true;
        }
    }
    
    if killed {
        Response {
            success: true,
            message: "CapCut process terminated successfully.".to_string(),
        }
    } else {
        Response {
            success: false,
            message: "No CapCut process found running.".to_string(),
        }
    }
}

#[tauri::command]
fn copy_project(src_path: String, dest_path: String) -> Response {
    let src = Path::new(&src_path);
    let dest = Path::new(&dest_path);
    
    if !src.exists() {
        return Response {
            success: false,
            message: format!("Source path {} does not exist.", src_path),
        };
    }
    
    match fs_extra::dir::copy(src, dest, &fs_extra::dir::CopyOptions::new().overwrite(true)) {
        Ok(_) => Response {
            success: true,
            message: format!("Project copied successfully to {}", dest_path),
        },
        Err(e) => Response {
            success: false,
            message: format!("Failed to copy project: {}", e),
        },
    }
}

#[tauri::command]
fn lock_version(file_path: String, lock: bool) -> Response {
    let path = Path::new(&file_path);
    if !path.exists() {
        return Response {
            success: false,
            message: "Project metadata file not found.".to_string(),
        };
    }
    
    let mut permissions = fs::metadata(path).unwrap().permissions();
    permissions.set_readonly(lock);
    
    match fs::set_permissions(path, permissions) {
        Ok(_) => {
            let msg = if lock { "Version Locked" } else { "Version Unlocked" };
            Response {
                success: true,
                message: msg.to_string(),
            }
        },
        Err(e) => Response {
            success: false,
            message: format!("Failed to set permissions: {}", e),
        },
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            kill_capcut,
            copy_project,
            lock_version
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
