import { NextResponse } from "next/server";

  export function GET() {
  return NextResponse.json({
    message: "Datos desde la API",
    name: "Rafael",
    last_name: "Rosabal Chamizo",
    role: "Frontend developer",
    skills: ["HTML", "CSS", "Javascript", "React", "NextJS"],
  });
}  

/*  export async function GET() {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
 console.log(data.data)
}  */

export function POST() {
  return NextResponse.json({
    message: "Introducir datos a API",
  });
}
export function PUT() {
  return NextResponse.json({
    message: "Actualizar datos",
  });
}
export function DELETE() {
  return NextResponse.json({
    message: "Eliminar datos",
  });
}
