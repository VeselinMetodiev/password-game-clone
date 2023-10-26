import { Chessboard } from "react-chessboard";

export default function ChessBoardComponent({ position }) {
  return <Chessboard position={position} id="BasicBoard" />;
}
