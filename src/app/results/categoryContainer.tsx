import CategoryElement from './categoryElement';

const placeholderArray: string[] = ["item1", "item2", "item3", "item4"];
// This element will manage its own state for which category element is open
// Each element will receive an optional styles.open value to define its height

const CategoryContainer = () => {
    return(
        <div className="">
            { placeholderArray.map(item => <CategoryElement key={item} />)}
        </div>
    );
};

export default CategoryContainer;