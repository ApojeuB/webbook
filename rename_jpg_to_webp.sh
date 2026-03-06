#!/bin/bash

# Get the current directory where the script is located
cd pages

# Loop through all .jpg files in the directory and rename them to .webp
for file in *.jpg; do
    if [ -e "$file" ]; then  # Check if the file exists
        mv "$file" "${file%.jpg}.webp"
    fi
done
