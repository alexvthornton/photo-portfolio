
import os
import random
from PIL import Image


input_dir = "../src/assets/images/wedding-thumbnails/"
output_dir = "../src/assets/images/wedding-thumbnails-2/"

dirs = os.listdir(input_dir)

os.makedirs(output_dir, exist_ok=True)

# for dir in dirs:
# os.makedirs(f"{output_dir}/{dir}")
files = os.listdir(f"../src/assets/images/wedding-thumbnails/")
for file in files:
    if file.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        input_path = os.path.join(input_dir, file)

        output_path = os.path.join(output_dir, f"{random.randint(1,100)}_.png")

        os.rename(input_path, output_path)