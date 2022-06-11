// Reactを使うためにimport命令
import React from "react";

// コンポーネントのストーリーが、引数をpropsとして受け取る単純なコンポーネントである場合。
import { ComponentMeta } from "@storybook/react";

// コンポーネントファイルを読み込む
import { Button } from "./Button";

export default {
  // ブラウザで表示するタイトル
  // titleは自由に変えられます。
  // titleを変えるとブラウザ画面上にエラーが出ます、その場合はtitleをもう一度クリックし直すと新しい設定値でコンポーネントを呼び出してくれエラーが直ります。
  title: "Components / Button",

  // .storybook\main.jsの"stories"設定とマッチするファイルを探します。
  // Buttonの場合はButton.tsxファイルを探しています。
  component: Button,

  // TypeScriptの型設定
  // ComponentMetaは コンポーネントのストーリーが、引数をプロップとして受け取る単純なコンポーネントで使用します。
} as ComponentMeta<typeof Button>;

// storyです
// このコンポーネントにいろんな引数を与えて
// 色んなパターンの表示を見ることができます。
// storyはそれぞれ独立しているので、このように中身が同じアロー関数を与えても大丈夫です。（通常は色々なパターンの引数を与えシミュレートします。）

export const Default1 = () => <Button>Click me</Button>;

export const Default2 = () => <Button disabled>Click me</Button>;

export const Default3 = () => <Button disabled>Click me</Button>;
