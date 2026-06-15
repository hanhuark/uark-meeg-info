import test from "node:test";
import assert from "node:assert/strict";

import { resources, getCategories, filterResources } from "../script.js";

test("catalog includes all starter resources", () => {
  assert.equal(resources.length, 26);
  assert.ok(resources.some((resource) => resource.title === "Course Search Power BI"));
  assert.ok(resources.some((resource) => resource.title === "Final Exam Schedule"));
  assert.ok(resources.some((resource) => resource.title === "Streamlyne"));
  assert.ok(resources.some((resource) => resource.title === "SciShield Safety Training"));
});

test("categories include the requested resource groups", () => {
  assert.deepEqual(getCategories(resources), [
    "Student Information",
    "Proposal Related",
    "Purchase Related",
    "Travel Related",
    "Hiring Related",
    "Other Faculty Resources"
  ]);
});

test("search matches titles, descriptions, categories, audiences, and tags", () => {
  assert.deepEqual(
    filterResources(resources, { query: "streamlyne", category: "All" }).map((resource) => resource.title),
    ["Streamlyne"]
  );

  assert.deepEqual(
    filterResources(resources, { query: "meals", category: "All" }).map((resource) => resource.title),
    ["UARK Travel Policies - Meals", "GSA Per Diem Rates"]
  );

  assert.ok(
    filterResources(resources, { query: "student", category: "All" }).every((resource) =>
      resource.title.toLowerCase().includes("student") ||
      resource.description.toLowerCase().includes("student") ||
      resource.audience.toLowerCase().includes("student") ||
      resource.category.toLowerCase().includes("student") ||
      resource.tags.includes("student")
    )
  );
});

test("category filter limits results without losing search", () => {
  const travelResults = filterResources(resources, { query: "", category: "Travel Related" });
  assert.equal(travelResults.length, 4);
  assert.ok(travelResults.every((resource) => resource.category === "Travel Related"));

  assert.deepEqual(
    filterResources(resources, { query: "forms", category: "Student Information" }).map((resource) => resource.title),
    ["MEEG Forms for Students", "College of Engineering Override Forms"]
  );
});
