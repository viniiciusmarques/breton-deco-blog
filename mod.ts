import type { App, FnContext } from "@deco/deco";
import { PreviewContainer } from "apps/utils/preview.tsx";
import manifest, { Manifest } from "./manifest.gen.ts";

export type AppContext = FnContext<State, Manifest>;

// Here we define the state of the app
// You choose what to put in the state
export type State = any;

/**
 * @title App Template
 * @description This is an template of an app to be used as a reference.
 * @category Tools
 * @logo https://
 */
export default function App(state: State): App<Manifest, State> {
  return { manifest, state };
}

// It is important to use the same name as the default export of the app
export const preview = () => {
  return {
    Component: PreviewContainer,
    props: {
      name: "Deco Blog",
      owner: "deco",
      description: "Manage your posts, categories and authors.",
      logo: "https://raw.githubusercontent.com/deco-cx/apps/main/weather/logo.png",
      images: [],
      tabs: [],
    },
  };
};
