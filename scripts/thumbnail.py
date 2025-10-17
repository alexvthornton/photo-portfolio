
import os
from PIL import Image



input_dir = "../src/assets/images/fullres/"
output_dir = "../src/assets/images/thumbnails/"

dirs = os.listdir(input_dir)

os.makedirs(output_dir, exist_ok=True)

for dir in dirs:
    os.makedirs(f"{output_dir}/{dir}")
    files = os.listdir(f"../src/assets/images/fullres/{dir}")
    for file in files:
        if file.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
            input_path = os.path.join(input_dir, dir, file)
            output_path = os.path.join(output_dir, dir, file)

            with Image.open(input_path) as img:
                img.thumbnail((1000,1000))
                img.save(output_path, optimize=True, quality=85)
