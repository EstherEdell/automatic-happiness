
const memes = [
'meme23.png',
'meme1.jpg',
'meme2.jpg',
'meme3.jpg',
'meme4.jpg',
'meme5.jpg',
'meme6.jpg',
'meme7.jpg',
'meme8.jpg',
'meme9.jpg',
'meme10.jpg',
'meme11.jpg',
'meme12.jpg',
'meme13.jpg',
'meme14.jpg',
'meme15.jpg',
'meme16.jpg',
'meme17.jpg',
'meme18.jpg',
'meme19.jpg',
'meme20.jpg',
'meme21.jpg',
'meme22.jpg',
'meme23.png',
'meme24.png',
'meme25.png',
'meme26.png',
'meme27.png',
'meme28.png',
'meme29.png',
'meme30.png',
'meme31.png',
'meme32.png',
'meme33.png',
'meme34.png',
'meme35.png',
'meme36.png',
'meme37.png'
 ]

document.querySelector('button').addEventListener('click', function(){ 
    const randomMeme = Math.round(Math.random() * memes.length)
    console.log(memes[randomMeme])
    document.querySelector('img').src = `./assets/${memes[randomMeme]}`;

})

