require('dotenv').config()
const fs = require('fs')
let { put } = require('@vercel/blob')

const token = process.env.VERCEL_TOKEN; 
const project = 'test-upload-images';
const arquivo = './imagem.jpg'; 
const arquivoBuffer = fs.readFileSync(arquivo);

async function start() {
  const blob = await put(arquivo, arquivoBuffer, {
    token,
    project,
    access: 'public'
  });

  console.log(blob)
}

start()

