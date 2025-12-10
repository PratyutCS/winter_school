#!/bin/bash
# or use: #!/bin/sh

echo "Adding files to git..."
git add .

echo "Committing..."
git commit -m "updated speaker details"

echo "Pushing to remote..."
git push

echo "Running local script..."
./script_0.sh

echo "Zipping frontend/dist (if not already zipped)..."
# Uncomment the next line if you need to zip it here:
# zip -r frontend/dist/website.zip frontend/dist/*

echo "Copying build to server..."
scp frontend/dist/website.zip cws@events.iitbhilai.ac.in:~/

echo "SSH into server..."
ssh cws@events.iitbhilai.ac.in

