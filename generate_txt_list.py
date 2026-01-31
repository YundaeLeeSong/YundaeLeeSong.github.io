import os
import json

def generate_txt_list():
    # Filter for .txt files, excluding the output json file itself if it were to end in .txt (unlikely but good practice)
    # and excluding configuration files like requirements.txt if they exist and shouldn't be listed. 
    # For now, we list all .txt files.
    files = [f for f in os.listdir('.') if f.lower().endswith('.txt')]
    
    # Sort files to ensure consistent order
    files.sort()
    
    output_file = 'txt_files.json'
    
    with open(output_file, 'w') as f:
        json.dump(files, f, indent=2)
    
    print(f"{output_file} has been saved with {len(files)} files.")

if __name__ == "__main__":
    generate_txt_list()
