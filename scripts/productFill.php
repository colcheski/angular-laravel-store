<?php

// Script to add products to DB

// Examples of script

// Add Predefined Products Setup (Recommended):
// php productFill.php -c predefined_setup

// Add Single Product:
// php productFill.php -c add_product -n "French Murph" -d "Murph with a French Twist" -i "/img/test/french_murph"

// Clear All Products:
// php productFill.php -c clear

$databasePDO = new PDO('sqlite:../backend/database/database.sqlite');

$predefinedProductsArray = [
  [
    'productName' => 'French Murph',
    'productDescription' => 'Murph with a French Twist',
    'imageLocation' => '/products/paint_me_french_murph.jpeg'
  ],
  [
    'productName' => 'Thick Murph',
    'productDescription' => 'Murph in his Thick Era',
    'imageLocation' => '/products/thick_murph.jpg'
  ],
];

// TODO: You're supposed to be able to define optional args with double colon, but this doesn't seem to be working
$options = getOpt("c:n:d:i:", array("command:", "name:", "description:", "image_location:"));
$command = $options['command'] ?? $options['c'];
$productName = $options['name'] ?? $options['n'];
$productDescription = $options['description'] ?? $options['d'];
$imageLocation = $options['image_location'] ?? $options['i'];

switch ($command)
{
  case 'predefined_setup':
    clearAllProducts($databasePDO);
    addPredefinedProducts($databasePDO, $predefinedProductsArray);
    break;
  case 'add_product':
    // Add a single product
    addProduct($databasePDO, $productName, $productDescription, $imageLocation);
    break;
  case 'clear':
    clearAllProducts($databasePDO);
    break;
}

function addPredefinedProducts(PDO $databasePDO, array $predefinedProductsArray)
{
  $productsAdded = 0;
  foreach ($predefinedProductsArray as $product) {
    $productName = $product['productName'];
    $productDescription = $product['productDescription'];
    $imageLocation = $product['imageLocation'];

    addProduct($databasePDO, $productName, $productDescription, $imageLocation);
    $productsAdded++;
  }
  echo "$productsAdded Products Added \n";
}

function addProduct(PDO $databasePDO, string $productName, string $productDescription, string $imageLocation)
{
  $sql = "INSERT INTO products (name, description, imageLocation, created_at) VALUES (:productName, :productDescription, :imageLocation, datetime('now'))";
  $statement = $databasePDO->prepare($sql);

  $statement->bindParam(':productName', $productName);
  $statement->bindParam(':productDescription', $productDescription);
  $statement->bindParam(':imageLocation', $imageLocation);
  
  $statement->execute();
  echo "Created product: $productName \n";
}

function clearAllProducts(PDO $databasePDO) 
{
  $affectedRows = $databasePDO->exec("DELETE FROM products");
  echo "Number of rows deleted: $affectedRows \n";
}