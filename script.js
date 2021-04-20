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
'meme24.png',
'meme25.jpg',
'meme26.jpg',
'meme27.jpg',
'meme28.jpg',
'meme29.jpg',
'meme30.jpg',
'meme31.jpg',
'meme32.jpg',
'meme33.jpg',
'meme34.jpg',
'meme35.jpg',
'meme36.jpg',
'meme37.jpg'
 ]

document.querySelector('button').addEventListener('click', function(){ 
    const randomMeme = Math.round(Math.random() * memes.length)
    console.log(memes[randomMeme])
    document.querySelector('img').src = `./assets/${memes[randomMeme]}`;

})