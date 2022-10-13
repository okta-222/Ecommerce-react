import React from "react";
import data from "./data";
import ProductsCard from "../../../../design-system/components/ProductsCard/ProductsCard";
import { Line } from "rc-progress";
import {
  BannerRight,
  IconCategoryOne,
  IconCategoryTwo,
  InputCategory,
  ItemList,
  ListCheckBox,
  MenuLeft,
  ParagraphCategory,
  ProductsBottom,
  ProductsTop,
  ProductsWrapper,
  SelectCategoryOne,
  TextCategory,
  LinkItem,
  ProgressCard,
  FilterCard,
  TagsCard,
  IconColor,
  SpanColor,
  LinkColorBlue,
  LinkColorOrange,
  LinkColorBrown,
  LinkColorGreen,
  LinkColorPurple,
  LinkColorSky,
  ListTagCard,
  ItemTag,
} from "./Styles";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="container">
      <ProductsWrapper>
        <ProductsTop>
          <TextCategory>
            <h2>fresh organic products</h2>
            <ParagraphCategory>
              about 9.260 results (0.62 seconds)
            </ParagraphCategory>
          </TextCategory>
          <InputCategory>
            <IconCategoryOne>
              <h4>per page :</h4>
              <SelectCategoryOne>
                <option value="12">12</option>
                <option value="1">22</option>
                <option value="1">32</option>
                <option value="1">42</option>
              </SelectCategoryOne>
            </IconCategoryOne>
            <IconCategoryTwo>
              <h4>sort by :</h4>
              <SelectCategoryOne>
                <option value="best match">best match</option>
                <option value="1">22</option>
                <option value="1">32</option>
                <option value="1">42</option>
              </SelectCategoryOne>
            </IconCategoryTwo>
            <i className="fa-solid fa-barcode border"></i>
            <i className="fa-solid fa-bars border"></i>

            <div className="form-fields">
              <div className="searchBar">
                <input
                  id="Input-bar"
                  type="text"
                  name="Input"
                  placeholder="Search"
                />
                <button id="Submit" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </InputCategory>
        </ProductsTop>

        <ProductsBottom>
          <MenuLeft>
            <h2>products category</h2>
            <ListCheckBox>
              <ItemList>
                <input type="checkbox" />
                <LinkItem>tablets (5)</LinkItem>
              </ItemList>
              <ItemList>
                <input type="checkbox" />
                <LinkItem>mask&covid (7)</LinkItem>
              </ItemList>
              <ItemList>
                <input type="checkbox" />
                <LinkItem>equipment&gloves (3)</LinkItem>
              </ItemList>
              <ItemList>
                <input type="checkbox" />
                <LinkItem>fruits&vegetables (5)</LinkItem>
              </ItemList>
              <ItemList>
                <input type="checkbox" />
                <LinkItem>grocery&stables (4)</LinkItem>
              </ItemList>
              <ItemList>
                <input type="checkbox" />
                <LinkItem>health&wiliness (8)</LinkItem>
              </ItemList>
              <ItemList>
                <input type="checkbox" />
                <LinkItem>leafy green (4)</LinkItem>
              </ItemList>
              <ItemList>
                <input type="checkbox" />
                <LinkItem>package food (9)</LinkItem>
              </ItemList>
              <ItemList>
                <input type="checkbox" />
                <LinkItem>un categorized (44)</LinkItem>
              </ItemList>
            </ListCheckBox>

            <ProgressCard>
              <h2>Price/SQ FT Filter</h2>
              <Line percent={100} strokeWidth={3} strokeColor="#76a713" />
              <h2>From 0 to $8000</h2>
            </ProgressCard>

            <FilterCard>
              <h2>filter by color</h2>
              <IconColor>
                <LinkColorBlue className="fa-solid fa-circle blue">
                  <SpanColor>blue</SpanColor>
                </LinkColorBlue>
                <LinkColorOrange className="fa-solid fa-circle orange">
                  <SpanColor>orange</SpanColor>
                </LinkColorOrange>
                <LinkColorBrown className="fa-solid fa-circle brown">
                  <SpanColor>brown</SpanColor>
                </LinkColorBrown>
                <LinkColorGreen className="fa-solid fa-circle green">
                  <SpanColor>green</SpanColor>
                </LinkColorGreen>
                <LinkColorPurple className="fa-solid fa-circle purple">
                  <SpanColor>purple</SpanColor>
                </LinkColorPurple>
                <LinkColorSky className="fa-solid fa-circle sky">
                  <SpanColor>sky</SpanColor>
                </LinkColorSky>
              </IconColor>
            </FilterCard>
            <TagsCard>
              <h3>related tags</h3>
              <ListTagCard>
                <ItemTag>covid-19</ItemTag>
                <ItemTag>healthy</ItemTag>
                <ItemTag>medicine</ItemTag>
                <ItemTag>tablet</ItemTag>
                <ItemTag>juices</ItemTag>
                <ItemTag>natural</ItemTag>
              </ListTagCard>
            </TagsCard>
          </MenuLeft>

          <BannerRight>
            {data.map((property) => (
              <ProductsCard key={property.id} property={property} />
            ))}
          </BannerRight>
        </ProductsBottom>
      </ProductsWrapper>
    </div>
  );
}
