import { Form, Formik } from "formik";
import React, { useState } from "react";
import { BookCategories, FormikSubmitEvent, SearchOptions } from "../types";
import FormField from "components/FormField";
import FormSelect from "components/FormSelect";
import InputGroup from "components/InputGroup";
import { AiOutlineSearch } from 'react-icons/ai'
import IconButton from "components/IconButton";
import capitalize from "utils/capitalize";

// TODO: Add redux logic
const SearchForm: React.FC = () => {
 const [searchOptions, setSearch] = useState<SearchOptions>({
	category: BookCategories.ALL,
	name: '',
	sortBy: 'relevance'
 })

 const onSubmit: FormikSubmitEvent<SearchOptions> = async (values) => {
	// temp plug for debugging
	console.log(values)
 }

 return (
		 <div className="h-full w-full mt-10">
			<Formik initialValues={searchOptions} onSubmit={onSubmit}>
			 <Form className="flex flex-col gap-y-4">
				<InputGroup>
				 <FormField placeholder="Name..." label="" name="name" />
				 <IconButton type="submit" icon={<AiOutlineSearch />} />
				</InputGroup>
				<div className="flex gap-x-4">
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