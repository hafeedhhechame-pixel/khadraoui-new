
Add-Type -AssemblyName System.Drawing

function Resize-Image {
    param([string]$InputFile, [string]$OutputFile, [int]$Width, [int]$Height)

    $srcImage = [System.Drawing.Image]::FromFile($InputFile)
    $newImage = new-object System.Drawing.Bitmap $Width, $Height

    $graphics = [System.Drawing.Graphics]::FromImage($newImage)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.DrawImage($srcImage, 0, 0, $Width, $Height)
    $graphics.Dispose()

    $newImage.Save($OutputFile, [System.Drawing.Imaging.ImageFormat]::Png)
    $newImage.Dispose()
    $srcImage.Dispose()
}

# Resize icons
Resize-Image -InputFile "public\icon-192.png" -OutputFile "public\icon-192-fixed.png" -Width 192 -Height 192
Resize-Image -InputFile "public\icon-512.png" -OutputFile "public\icon-512-fixed.png" -Width 512 -Height 512

# Replace originals
Move-Item -Path "public\icon-192-fixed.png" -Destination "public\icon-192.png" -Force
Move-Item -Path "public\icon-512-fixed.png" -Destination "public\icon-512.png" -Force

Write-Host "Icons resized successfully!"
