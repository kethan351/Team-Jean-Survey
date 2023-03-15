import * as React from 'react';
import {
  PlasmicTodoApp,  DefaultTodoAppProps,
} from './plasmic/jean_survey_2/PlasmicTodoApp';
import { useState } from 'react';
import { createEntry, Entry } from '../model';
import Task from './Task';
import { HTMLElementRefOf } from '@plasmicapp/react-web';


interface TodoAppProps extends DefaultTodoAppProps {}

function TodoApp(props: TodoAppProps, ref: HTMLElementRefOf<'div'>) {
  const [entries, setEntries] = useState<Entry[]>([createEntry('Hello world'), createEntry('Goodbye world')]);
  return (
    <PlasmicTodoApp
      root={{ ref }}
      {...props}
      tasksContainer={{
        children: entries.map((entry) => <Task entry={entry} />)
      }}
    />
  );
}

export default React.forwardRef(TodoApp);