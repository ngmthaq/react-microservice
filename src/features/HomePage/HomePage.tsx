import React from "react";
import { Form, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useSnackbar, useTheme } from "@/common/hooks";
import { AboutPagePath } from "@/configs/router/path.router";
import { LoaderFC, withRouterLoader } from "@/common/components/hoc";
import { HomePageContext, HomePageContextType, HomePageLoaderResponseType } from "./HomePage.context";
import { Greeting } from "./HomePage.styled";

const Page: LoaderFC<HomePageLoaderResponseType> = ({ loaderData }) => {
  const { mode, changeTheme } = useTheme();
  const { openSnackbar } = useSnackbar();

  const HomePageContextValue: HomePageContextType = { loaderData };

  const handleChangeTheme = () => {
    if (mode === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };

  const handleOpenSnackbar = () => {
    openSnackbar({ message: "You have a notification", variant: "info" });
  };

  return (
    <HomePageContext.Provider value={HomePageContextValue}>
      <Greeting variant="h1">Hello World</Greeting>
      <Button variant="contained" onClick={handleChangeTheme}>
        Change Theme
      </Button>
      <br />
      <br />
      <Button variant="contained" onClick={handleOpenSnackbar}>
        Open Snackbar
      </Button>
      <br />
      <br />
      <Link to={AboutPagePath.path}>
        <Button>About</Button>
      </Link>
      <br />
      <br />
      <Form method="post">
        <input type="text" name="title" placeholder="Title" />
        <br />
        <input type="text" name="body" placeholder="Body" />
        <br />
        <input type="hidden" name="userId" value="1" />
        <button type="submit" name="intent" value="createPost">
          Create Post
        </button>
      </Form>
      <br />
      <br />
      <ul>
        {loaderData.posts.map((post) => (
          <li key={post.id}>
            ({post.userId}) {post.title}: {post.body}
          </li>
        ))}
      </ul>
    </HomePageContext.Provider>
  );
};

export const HomePage = withRouterLoader(Page);
