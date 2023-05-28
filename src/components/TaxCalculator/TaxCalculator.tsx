import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { FunctionComponent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { getCalculatedTax, validateAnnualIncome } from './taxCalculatorUtils';
import { useApi } from '@/utils/http';
import { TaxCalculatorTable } from './TaxCalculatorTable';
import styles from './taxCalculator.module.scss';

const ASSESSMENT_YEAR = [2022, 2021, 2020, 2019];

interface TaxCalculatorFormFields {
  assessmentYear: number;
  annualIncome: number;
}
export const TaxCalculator: FunctionComponent = () => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<TaxCalculatorFormFields>();
  const { run: apiGetCalculatedTax, data: calculatedTax, isLoading, hasError } = useApi(getCalculatedTax);
  const isFormValid = Object.keys(errors).length === 0;

  const onSubmit = async (data: TaxCalculatorFormFields) => {
    return await apiGetCalculatedTax(data.annualIncome, data.assessmentYear);
  };

  return (
    <div className={styles.taxCalculatorContainer}>
      <div className={styles.taxCalculatorContent}>
        <h1>Tax Calculator</h1>
        {/* If there are multiple usecases of forms, this can be improved to have less boilerplate code, and improve readibility */}
        <form onSubmit={handleSubmit(onSubmit)} className={styles.taxCalculatorForm}>
          <FormControl fullWidth>
            <InputLabel htmlFor="assessmentYear">Assessment Year</InputLabel>
            <Select
              aria-label="Assessment Year"
              label="Assessment Year"
              id="assessmentYear"
              defaultValue={2022}
              {...register('assessmentYear', {valueAsNumber: true})}
            >
              {ASSESSMENT_YEAR.map((year) => <MenuItem key={year} value={year}>{year}</MenuItem>)}
            </Select>
          </FormControl>
          <TextField
            label="Annual Income"
            fullWidth
            {...register('annualIncome', {
              valueAsNumber: true,
              validate: validateAnnualIncome,
            })}
            error={!!errors.annualIncome}
            helperText={errors.annualIncome?.message}
          />
          <Button type="submit" variant="contained" disabled={isLoading || !isFormValid}>Calculate</Button>
        </form>
        {/* Error can be shown more beautifully */}
        {hasError && <div className={styles.taxCalculatorError}>An Error occurred!</div>}
        <TaxCalculatorTable
          annualIncome={getValues('annualIncome')}
          taxBands={calculatedTax?.taxBands}
          totalTax={calculatedTax?.totalTax}
        />
      </div>
    </div>
  )
}
