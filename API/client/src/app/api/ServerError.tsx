import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const ServerError = () => {
  const history = useHistory();
  const { state } = useLocation<any>();
  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography variant="h3" color='error' gutterBottom>
             {state.error.title}
          </Typography>
          <Divider />
          <Typography>
            {state.error.detail || "Internal server error"}
          </Typography>
        </>
      ) : (
        <Typography>Server error</Typography>
      )}
      <Button onClick={() => history.push("/catalog")}>
        Go back to the store
      </Button>
    </Container>
  );
};

export default ServerError;
