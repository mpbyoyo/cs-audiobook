import React from "react";
import MDEditor from "@uiw/react-md-editor";

const MkdwnEditor = ({ reading }) => {
  const [value, setValue] = React.useState("");
  return (
    <div className="MkdwnEditor" data-color-mode="light">
      {reading ? (
        <MDEditor.Markdown
          source={value}
          escapeHtml={true}
          skipHtml={true}
          transformLinkUri={null}
        />
      ) : (
        <div className="container">
          <MDEditor
            value={value}
            autoFocus={false}
            onChange={setValue}
            previewOptions={{
              skipHtml: true,
              escapeHtml: true,
              transformLinkUri: null,
              linkTarget: "_blank",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MkdwnEditor;
