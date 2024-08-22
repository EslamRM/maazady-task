<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Main Category Selection -->
      <div>
        <label
          for="mainCategory"
          class="block text-sm font-medium text-gray-700"
        >
          Main Category *
        </label>
        <select
          v-model="selectedMainCategory"
          @change="fetchSubcategories"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>Select Main Category</option>
          <option v-for="cat in mainCategories" :key="cat.id" :value="cat.id">
            {{ cat.name }}
          </option>
        </select>
      </div>

      <!-- Subcategory Selection -->
      <div v-if="subCategories.length > 0">
        <label
          for="subCategory"
          class="block text-sm font-medium text-gray-700"
        >
          Subcategory *
        </label>
        <select
          v-model="selectedSubCategory"
          @change="fetchProperties"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>Select Subcategory</option>
          <option v-for="sub in subCategories" :key="sub.id" :value="sub.id">
            {{ sub.name }}
          </option>
        </select>
      </div>

      <!-- Property Selection -->
      <div v-for="(property, index) in properties" :key="index">
        <label
          :for="`property-${index}`"
          class="block text-sm font-medium text-gray-700"
        >
          {{ property.name }}
        </label>
        <select
          v-model="property.selectedOption"
          @change="handlePropertyChange(property, index)"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>Select {{ property.name }}</option>
          <option v-for="opt in property.options" :key="opt.id" :value="opt.id">
            {{ opt.name }}
          </option>
        </select>

        <!-- UI for 'Other' input field -->
        <input
          v-if="property.showOtherInput"
          v-model="property.otherValue"
          type="text"
          :placeholder="`Enter custom ${property.name}`"
          class="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <!-- Child Properties -->
        <div
          v-if="property.childProperties && property.childProperties.length"
          class="mt-4 pl-4 border-l-2"
        >
          <div
            v-for="(childProperty, childIndex) in property.childProperties"
            :key="childIndex"
            class="mt-4"
          >
            <label
              :for="`child-property-${index}-${childIndex}`"
              class="block text-sm font-medium text-gray-700"
            >
              {{ childProperty.name }}
            </label>
            <select
              v-model="childProperty.selectedOption"
              @change="
                handlePropertyChange(childProperty, `${index}-${childIndex}`)
              "
              class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Select {{ childProperty.name }}</option>
              <option
                v-for="opt in childProperty.options"
                :key="opt.id"
                :value="opt.id"
              >
                {{ opt.name }}
              </option>
            </select>

            <!-- Input for 'Other' option in child properties -->
            <input
              v-if="childProperty.showOtherInput"
              v-model="childProperty.otherValue"
              type="text"
              :placeholder="`Enter custom ${childProperty.name}`"
              class="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />

            <!-- Recursive handling for nested child properties -->
            <div
              v-if="
                childProperty.childProperties &&
                childProperty.childProperties.length
              "
              class="mt-4 pl-4 border-l-2"
            >
              <!-- Recurse as needed for deeper child properties -->
              <component
                :is="'div'"
                v-for="(
                  subChildProperty, subChildIndex
                ) in childProperty.childProperties"
                :key="subChildIndex"
              >
                <label
                  :for="`sub-child-property-${index}-${childIndex}-${subChildIndex}`"
                  class="block text-sm font-medium text-gray-700"
                >
                  {{ subChildProperty.name }}
                </label>
                <select
                  v-model="subChildProperty.selectedOption"
                  @change="
                    handlePropertyChange(
                      subChildProperty,
                      `${index}-${childIndex}-${subChildIndex}`
                    )
                  "
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled>
                    Select {{ subChildProperty.name }}
                  </option>
                  <option
                    v-for="opt in subChildProperty.options"
                    :key="opt.id"
                    :value="opt.id"
                  >
                    {{ opt.name }}
                  </option>
                </select>

                <!-- Input for 'Other' option in sub-child properties -->
                <input
                  v-if="subChildProperty.showOtherInput"
                  v-model="subChildProperty.otherValue"
                  type="text"
                  :placeholder="`Enter custom ${subChildProperty.name}`"
                  class="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </component>
            </div>
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>

      <!-- Submitted Data Table -->
      <table
        v-if="submittedData.length"
        class="mt-6 w-full bg-white border border-gray-300 rounded-md shadow-sm"
      >
        <thead>
          <tr class="bg-gray-50">
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Property
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(data, index) in submittedData"
            :key="index"
            class="bg-white"
          >
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ data.key }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {{ data.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Category {
  id: number;
  name: string;
  children?: Category[];
}

interface PropertyOption {
  id: number;
  name: string;
}

interface Property {
  id: number;
  name: string;
  options: PropertyOption[];
  selectedOption: string | null;
  otherValue?: string;
  showOtherInput?: boolean;
  childProperties?: Property[];
}

const selectedMainCategory = ref<number | null>(null);
const selectedSubCategory = ref<number | null>(null);
const mainCategories = ref<Category[]>([]);
const subCategories = ref<Category[]>([]);
const properties = ref<Property[]>([]);
const submittedData = ref<{ key: string; value: string }[]>([]);
const fetchMainCategories = async (): Promise<void> => {
  try {
    const response = await fetch(
      "https://staging.mazaady.com/api/v1/get_all_cats",
      {
        method: "GET",
        headers: {
          "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    mainCategories.value = data.data.categories;
  } catch (error) {
    console.error("Error fetching main categories:", error);
  }
};

const fetchSubcategories = async (): Promise<void> => {
  if (!selectedMainCategory.value) return;

  const selectedCategory = mainCategories.value.find(
    (cat) => cat.id === selectedMainCategory.value
  );

  if (selectedCategory) {
    subCategories.value = selectedCategory.children || [];
  } else {
    subCategories.value = [];
  }
};

const fetchProperties = async (): Promise<void> => {
  if (!selectedSubCategory.value) return;

  try {
    const response = await fetch(
      `https://staging.mazaady.com/api/v1/properties?cat=${selectedSubCategory.value}`,
      {
        headers: {
          "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    properties.value = data.data.map((property: any) => ({
      id: property.id,
      name: property.name,
      options: [...property.options, { id: -1, name: "other" }],
      selectedOption: null,
      showOtherInput: false,
      childProperties: [],
    }));
  } catch (error) {
    console.error("Error fetching properties:", error);
  }
};

const handlePropertyChange = (
  property: Property,
  index: number | string
): void => {
  if (property.selectedOption == "-1") {
    property.showOtherInput = true;
  } else {
    property.showOtherInput = false;
    fetchChildProperties(property, index);
  }
};

const fetchChildProperties = async (
  property: Property,
  parentIndex: number | string
): Promise<void> => {
  if (!property.selectedOption) return;

  try {
    const response = await fetch(
      `https://staging.mazaady.com/api/v1/get-options-child/${property.selectedOption}`,
      {
        method: "GET",
        headers: {
          "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (data.data && data.data.length > 0) {
      property.childProperties = data.data.map((childProperty: any) => ({
        id: childProperty.id,
        name: childProperty.name,
        options: [...childProperty.options, { id: -1, name: "other" }],
        selectedOption: null,
        showOtherInput: false,
        childProperties: [],
      }));
    } else {
      property.childProperties = [];
    }
  } catch (error) {
    console.error("Error fetching child properties:", error);
  }
};

const handleSubmit = (): void => {
  submittedData.value = [
    {
      key: "Main Category",
      value:
        mainCategories.value.find(
          (cat) => cat.id === Number(selectedMainCategory.value)
        )?.name || "",
    },
    {
      key: "Subcategory",
      value:
        subCategories.value.find(
          (sub) => sub.id === Number(selectedSubCategory.value)
        )?.name || "",
    },
    ...properties.value.flatMap((prop) => [
      {
        key: prop.name,
        value:
          prop.selectedOption === "-1"
            ? prop.otherValue || ""
            : prop.options.find((opt) => opt.id === Number(prop.selectedOption))
                ?.name || "",
      },
      ...(prop.childProperties || []).flatMap((childProp) => [
        {
          key: childProp.name,
          value:
            childProp.selectedOption === "-1"
              ? childProp.otherValue || ""
              : childProp.options.find(
                  (opt) => opt.id === Number(childProp.selectedOption)
                )?.name || "",
        },
        ...(childProp.childProperties || []).map((subChildProp) => ({
          key: subChildProp.name,
          value:
            subChildProp.selectedOption === "-1"
              ? subChildProp.otherValue || ""
              : subChildProp.options.find(
                  (opt) => opt.id === Number(subChildProp.selectedOption)
                )?.name || "",
        })),
      ]),
    ]),
  ];
};

fetchMainCategories();
</script>
