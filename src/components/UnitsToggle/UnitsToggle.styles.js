import React from "react";
import styled, { css } from "styled-components";
import { RadioGroup } from "@material-ui/core";

export default styled(({ ...rest }) => <RadioGroup {...rest} />)`
  ${({ theme: { spacing, breakpoints } }) =>
    css`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    `};
`;
