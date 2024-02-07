import React from "react";
import Team from "../Team";
import Form from "./Form";

export default function TableRow({ team }) {
  return (
    <tr>
      <td className="row_cell rank">{team.rank}</td>

      <td className="row_cell team">
        <Team key={`teamname: ${team.rank} ${team.team.id}`} team={team.team} />
      </td>

      <td className="row_cell ">{team.all.played}</td>

      <td className="row_cell ">{team.all.win}</td>

      <td className="row_cell">{team.all.draw}</td>

      <td className="row_cell lose">{team.all.lose}</td>

      <td className="row_cell goalsDiff">{team.goalsDiff}</td>

      <td className="row_cell points">{team.points}</td>

      <td className="row_cell form">{<Form form={team.form} />}</td>
   
    </tr>
  );
}
