import React from "react";
import SearchForm from "features/SearchForm";
import BooksList from "features/books/BooksList";
import AdaptiveLayout from "components/ui/AdaptiveLayout";
import LoadMore from "components/LoadMore";
import Heading from "components/ui/typography/Heading";

const App: React.FC = () => (
  <AdaptiveLayout>
    <Heading>Search for books!</Heading>
    <SearchForm />
    <BooksList />
    <LoadMore />
  </AdaptiveLayout>
);

export default App;
