import { Form, Formik } from "formik";
import React from "react";
import { BookCategories, FormikSubmitEvent, SearchOptions } from "types";
import FormField from "components/ui/forms/FormField";
import FormSelect from "components/ui/forms/FormSelect";
import InputGroup from "components/ui/buttons/InputGroup";
import { AiOutlineSearch } from 'react-icons/ai'
import IconButton from "components/ui/buttons/IconButton";
import capitalize from "utils/capitalize";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import { fetchBooksByOptions, setOptions } from "features/books/booksSlice";
import { object, string } from 'yup'

const validationSchema = object({
 name: string().required(),
})

const SearchForm: React.FC = () => {
 const initialValues = useAppSelector(state => state.books.searchOptions)
 const dispatch = useAppDispatch()

 const onSubmit: FormikSubmitEvent<SearchOptions> = async (values) => {
	dispatch(setOptions(values))
	dispatch(fetchBooksByOptions(values))
 }

 return (
		 <div className="w-full">
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			 <Form className="flex flex-col gap-y-4">
				<InputGroup>
				 <FormField placeholder="Name..." label="" name="name" />
				 <IconButton type="submit" icon={<AiOutlineSearch />} />
				</InputGroup>
				<div className="flex flex-col gap-4 sm:flex-row">
				 <FormSelect label="Category" name="category">
					{Object.keys(BookCategories).map((category, index) => (
							<option key={index + 1} value={category}>
							 {capitalize(category)}
							</option>
					))}
				 </FormSelect>
				 <FormSelect label="Sort by" name="sortBy">
					<option value="relevance">
					 Relevance
					</option>
					<option value="newest">
					 Newest
					</option>
				 </FormSelect>
				</div>
			 </Form>
			</Formik>
		 </div>
 )
}

export default SearchForm