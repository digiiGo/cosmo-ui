import React from "react";
import Input from "./Input";

export default function JsonToForm({ json }) {
  const jsonInput = {
    title: "User details",
    subtitle: "",
    theme: "",
    Pages: [
      {
        page1: [
          {
            radioGroup: {
              Id: "",
              Title: "",
              Options: [],
              isRequired: true,
              // customisation
            },
          },
        ],
      },
    ],
  };

  const Form = () => {
    return <Input />;
  };
  return (
    <div>
      <Form />
    </div>
  );
}
