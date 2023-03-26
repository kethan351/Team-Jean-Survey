import * as React from "react";
import { PlasmicTask, DefaultTaskProps } from "./plasmic/jean_survey_2/PlasmicTask";
import { Entry } from "../model";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useRef, useState } from "react";

interface TaskProps extends DefaultTaskProps {
  entry: Entry;
  onDelete: () => void;
}

function Task({ entry,onDelete, ...rest }: TaskProps, ref: HTMLElementRefOf<"div">) {
  return (
    <PlasmicTask root={{ ref }} {...rest} state={entry.done ? "checked" : undefined}
      deleteBtn={{
        onClick: () => {
          onDelete();
        }
      }}>
      {entry.descrip}
    </PlasmicTask>
  );
}

export default React.forwardRef(Task);