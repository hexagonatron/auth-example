import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Card, Button } from "react-bootstrap";

export const Profile = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [result, setResult] = useState(null);

  const getAuthToken = async () => {
    if (!user) {
      return null;
    }
    return getAccessTokenSilently({});
  };

  const testAuthedRoute = async () => {
    const token = await getAuthToken();
    console.log(token);
    try {
      const response = await fetch("/api/withAuth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json());
      console.log(response);
      setResult(response);
    } catch (err) {
      console.log(err);
      setResult(err);
    }
  };

  const testUnAuthedRoute = async () => {
    const response = await fetch("/api/noAuth").then((res) => res.json());
    console.log(response);
    setResult(response);
  };

  const getUserInfo = async () => {
    const token = await getAuthToken();
    console.log(token);
    try {
      const response = await fetch("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json());
      console.log(response);
      setResult(response);
    } catch (err) {
      console.log(err);
      setResult(err);
    }
  };


  return (
    <Container>
      {user ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img src={user.picture}></Card.Img>
          <Card.Body>
            <Card.Title>{user.nickname}</Card.Title>
            <Card.Text>
              <br />
              <strong>Email: </strong>
              {user.email}
              <br />
              <strong>Id: </strong>
              {user.sub}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <div>Not logged in</div>
      )}
      <Button onClick={testAuthedRoute}>Test Authed Route</Button>{' '}
      <Button onClick={testUnAuthedRoute}>Test Non Authed Route</Button>{' '}
      <Button onClick={getUserInfo}>Get User Info</Button>{' '}
      <div>
        <h2>Result</h2>
        <div>
          <pre>{JSON.stringify(result, null, 4)}</pre>
        </div>
      </div>
    </Container>
  );
};
