/**
 * EXPLAINATION
 * I like to export all externally required components in index files
 * This makes the imports tidy.
 * In addition to this, I avoid default exports, as default exports puts it on individual developer to use considtent import names.
 * It can introduce some typos making refactoring difficult in future.
 * Named exports enforce consistent import names across the project.
 * 
 * I avoid adding any "actual" code in index files, as navigating index files in a project can be tedious.
 */
export * from './TaxCalculator';
