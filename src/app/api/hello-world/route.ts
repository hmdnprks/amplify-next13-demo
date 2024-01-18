export async function GET() {
  // create function to randomize color
  const randomColor = () => {
    const colors = ['red', 'green', 'blue']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return Response.json({
    message: 'Hello World!',
    color: randomColor()
  })
}