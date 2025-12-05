#!/bin/bash

cd frontend
npm i
# npm run dev
# printf "\nSatisfied preview, building now\n"
npm run build
cd dist
zip -r website.zip ./
printf "\nscp frontend/dist/website.zip cws@events.iitbhilai.ac.in:~/\n\n"
