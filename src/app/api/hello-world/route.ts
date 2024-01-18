export async function GET() {
  // create function to randomize color hex
  const color = randomColor();
  console.log('color :>> ', color);

  return Response.json({
    message: 'Hello World!',
    color
  })
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}