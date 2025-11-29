Add-Type -AssemblyName System.Drawing

$mobile = [System.Drawing.Image]::FromFile("$PWD/public/screenshots/mobile.png")
$desktop = [System.Drawing.Image]::FromFile("$PWD/public/screenshots/desktop.png")

Write-Host "Mobile: $($mobile.Width)x$($mobile.Height)"
Write-Host "Desktop: $($desktop.Width)x$($desktop.Height)"

$mobile.Dispose()
$desktop.Dispose()
