import React from "react";
import { Card } from "../UI/Card";

export const Users = ({ takePosts }) => {
  // console.log(takePosts);
  return (
    <>
      <Card>
        {takePosts.map((element) => (
          <ul key={element.id}>
            <li>{element.title}</li>
            <li>{element.body}</li>
          </ul>
        ))}
      </Card>
      ;
    </>
  );
};
