import Editor, { EditorProps } from "@monaco-editor/react";
import { attempt, isError, trim } from "lodash-es";

type Props = {
  onChange?: (val: string | undefined | any) => void;
  transformObj?: boolean;
} & Omit<EditorProps, "onChange" | "language">;

const JsonInput = (props: Props) => {
  const { onChange, transformObj = true, value, ...editProps } = props;
  let realValue = transformObj ? trim(JSON.stringify(value), '"') : value;
  return (
    <Editor
      {...editProps}
      value={realValue}
      language="json"
      onChange={(e) => {
        if (transformObj) {
          const result = attempt(JSON.parse, e);
          console.log(e);
          if (!isError(result)) {
            onChange?.(result);
          }
          return;
        }
        onChange?.(e);
      }}
      options={{
        minimap: {
          enabled: false,
        },
      }}
    />
  );
};

export default JsonInput;
