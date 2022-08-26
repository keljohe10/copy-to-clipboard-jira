import React, { useState } from "react";
import { invoke } from "@forge/bridge";
import { LoadingButton } from "@atlaskit/button";
import CopyIcon from "@atlaskit/icon/glyph/copy";
import copy from "copy-to-clipboard";

const CopyButton = () => {
  const [isLoading, setIsloading] = useState(false);

  const copyIssueTitle = async () => {
    setIsloading(true);
    const {
      key,
      fields: { summary },
    } = await invoke("get-issue-title");

    copy(`${key}: ${summary}`);
    setIsloading(false);
  };

  return (
    <>
      <LoadingButton
        isLoading={isLoading}
        onClick={copyIssueTitle}
        iconBefore={<CopyIcon label="" size="medium" />}
      ></LoadingButton>
    </>
  );
};

export default CopyButton;
