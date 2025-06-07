#!/bin/bash

# Output project structure to a file
echo "# Project Structure" > PROJECT_STRUCTURE.md
echo "" >> PROJECT_STRUCTURE.md
echo "Generated on: $(date)" >> PROJECT_STRUCTURE.md
echo "" >> PROJECT_STRUCTURE.md
echo '```' >> PROJECT_STRUCTURE.md
find . -type f -not -path "*/node_modules/*" -not -path "*/test-results/*" | sort >> PROJECT_STRUCTURE.md
echo '```' >> PROJECT_STRUCTURE.md
echo "" >> PROJECT_STRUCTURE.md
echo "# Files Content" >> PROJECT_STRUCTURE.md
echo "" >> PROJECT_STRUCTURE.md

# Add content of key files
for file in playwright.config.js README.md tests/*.spec.js public/weather.html docs/*.md
do
  if [ -f "$file" ]; then
    echo "## $file" >> PROJECT_STRUCTURE.md
    echo "" >> PROJECT_STRUCTURE.md
    echo '```' >> PROJECT_STRUCTURE.md
    
    # Determine file extension
    extension="${file##*.}"
    if [ "$extension" == "js" ] || [ "$extension" == "json" ]; then
      echo "javascript" >> PROJECT_STRUCTURE.md
    elif [ "$extension" == "html" ]; then
      echo "html" >> PROJECT_STRUCTURE.md
    elif [ "$extension" == "md" ]; then
      echo "markdown" >> PROJECT_STRUCTURE.md
    fi
    
    cat "$file" >> PROJECT_STRUCTURE.md
    echo '```' >> PROJECT_STRUCTURE.md
    echo "" >> PROJECT_STRUCTURE.md
  fi
done

echo "Project structure has been written to PROJECT_STRUCTURE.md"
