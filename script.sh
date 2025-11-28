#!/bin/bash

cd frontend
npm i
<<<<<<< HEAD
# npm run dev
# printf "\nSatisfied preview, building now\n"
=======
npm run dev
printf "\nSatisfied preview, building now\n"
>>>>>>> 75033f0 (Added script.sh to automate)
npm run build
cd dist
zip -r website.zip ./
printf "\nscp frontend/dist/website.zip cws@events.iitbhilai.ac.in:~/\n\n"
