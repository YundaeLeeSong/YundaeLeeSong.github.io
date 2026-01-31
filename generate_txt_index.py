import os
import json
import sys

def generate_txt_list():
    # Use absolute path to ensure script works regardless of CWD
    base_dir = os.path.dirname(os.path.abspath(__file__))
    docs_dir = os.path.join(base_dir, 'docs')
    
    if not os.path.exists(docs_dir):
        print(f"Directory not found: {docs_dir}")
        sys.exit(1)

    # Filter for .txt files
    files = [f for f in os.listdir(docs_dir) if f.lower().endswith('.txt')]
    
    # Sort files to ensure consistent order
    files.sort()
    
    output_file = os.path.join(docs_dir, 'txt_files.json')
    
    with open(output_file, 'w') as f:
        json.dump(files, f, indent=2)
    
    print(f"{output_file} has been saved with {len(files)} files.")

if __name__ == "__main__":
    generate_txt_list()
