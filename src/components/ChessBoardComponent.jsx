import { Chessboard } from "react-chessboard";

export default function ChessBoardComponent({ fen }) {
  return <Chessboard position={fen} id="BasicBoard" />;
}
