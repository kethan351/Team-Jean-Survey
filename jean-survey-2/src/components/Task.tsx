import * as React from "react";
import { PlasmicTask, DefaultTaskProps } from "./plasmic/jean_survey_2/PlasmicTask";
import { Entry } from "../model";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
interface TaskProps extends DefaultTaskProps {
  entry: Entry;
}

function Task({ entry, ...rest }: TaskProps, ref: HTMLElementRefOf<"div">) {
  return (
    <PlasmicTask root={{ ref }} {...rest} state={entry.done ? "checked" : undefined}>
      {entry.descrip}
    </PlasmicTask>
  );
}

export default React.forwardRef(Task);