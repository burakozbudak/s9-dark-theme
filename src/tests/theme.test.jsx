/* eslint-disable no-undef */
import { afterEach, beforeEach, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import fs from "fs";
import path from "path";
import App from "../App.jsx";

const isDarkModeFileExists = fs.existsSync(
  path.resolve(__dirname, "../hooks/useDarkMode.jsx"),
  "utf8"
);
const isLocalStorageFileExists = fs.existsSync(
  path.resolve(__dirname, "../hooks/useLocalStorage.jsx"),
  "utf8"
);

const appCode = fs
  .readFileSync(path.resolve(__dirname, "../App.jsx"), "utf8")
  .replaceAll(/(?:\r\n|\r|\n| )/g, "");

const darkModeHook = isDarkModeFileExists
  ? fs
      .readFileSync(path.resolve(__dirname, "../hooks/useDarkMode.jsx"), "utf8")
      .replaceAll(/(?:\r\n|\r|\n| )/g, "")
  : "";

beforeEach(() => {
  render(<App />);
});

afterEach(() => {
  localStorage.clear();
});

test("darkMode hooku için dosya ismi doğru şekilde ayarlanmış mı?", () => {
  expect(isDarkModeFileExists).toBe(true);
});

test("localStorage hooku için dosya ismi doğru şekilde ayarlanmış mı?", () => {
  expect(isLocalStorageFileExists).toBe(true);
});

test("darkMode hooku react hookları gibi named export olarak tanımlanmış mı? (default export olarak değil)", () => {
  expect(isDarkModeFileExists).toBe(true);
  expect(darkModeHook).not.toContain("exportdefault");
});

test("darkMode hooku useLocalStorage hookunu içeriyor mu?", () => {
  expect(isDarkModeFileExists).toBe(true);
  expect(darkModeHook).toContain("useLocalStorage");
});

test("localStorage hooku named export olarak tanımlanmış mı? (default export olarak değil)", () => {
  expect(isLocalStorageFileExists).toBe(true);
  expect(darkModeHook).not.toContain("exportdefault");
});

test("App içinde state kullanımı kaldırılmış, onun yerine useDarkMode hooku eklenmiş mi?", () => {
  expect(appCode).not.toContain("useState");
  expect(appCode).toContain("useDarkMode");
});

test("Navbar.jsx deki darkMode butonu App.jsx dosyasında en üstteki div e dark-theme classını ekliyor.", async () => {
  const user = userEvent.setup();
  const toggle = screen.getByTestId("toggle-darkMode");
  await user.click(toggle);
  const app = screen.getByTestId("app");
  expect(app).toHaveClass("dark-theme");
});

test("darkMode uygulamanın ilk renderında localStoragea false başlangıç değeri ile kaydediliyor.", async () => {
  expect(localStorage.getItem("geceModu")).toBe("false");
});

test("darkMode localStorage a her değiştiğinde kaydediliyor.", async () => {
  const user = userEvent.setup();
  const toggle = screen.getByTestId("toggle-darkMode");
  await user.click(toggle);
  expect(localStorage.getItem("geceModu")).toBe("true");
  await user.click(toggle);
  expect(localStorage.getItem("geceModu")).toBe("false");
});
