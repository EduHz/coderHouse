import { StyleSheet } from "react-native";
import Categories from "../Components/Categories";
import Cabezera from "../Components/Cabezera";

const Home = ({ setCategorySelected }) => {
  return (
    <>
      <Cabezera title="Categories" />
      <Categories setCategorySelected={setCategorySelected} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
