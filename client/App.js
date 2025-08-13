import React from "react";
import "./global.css";

import { Toaster } from "./components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.js";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
  React.createElement(
    QueryClientProvider,
    { client: queryClient },
    React.createElement(
      TooltipProvider,
      null,
      React.createElement(Toaster),
      React.createElement(Sonner),
      React.createElement(
        BrowserRouter,
        null,
        React.createElement(
          Routes,
          null,
          React.createElement(Route, {
            path: "/",
            element: React.createElement(Index),
          }),
          React.createElement(Route, {
            path: "*",
            element: React.createElement(NotFound),
          }),
        ),
      ),
    ),
  );

createRoot(document.getElementById("root")).render(React.createElement(App));
