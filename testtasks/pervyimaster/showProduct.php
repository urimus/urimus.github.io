<?php
	// Variables Used: $result, $error_add
		if ($result->num_rows > 0) { 
?>
<div class="section_note">Результатов: <?php echo $result->num_rows;?></div>
<?php 
			$product_array=[];
			while($row=mysqli_fetch_assoc($result)) {
				$product_array[] = $row;
			}	
			foreach($product_array as $key=>$value){
?>
		<div class="product-item">
			<div class="product-image" align="center"><img width="200px" src="<?php echo $product_array[$key]["image"]; ?>"></div>
			<div class="product-tile-footer">
			<div class="margin_bottom"><?php echo $product_array[$key]["name"]; ?></div>
			<div class="margin_bottom">'<?php echo $product_array[$key]["code"]; ?>'</div>
			<div class="margin_bottom"><?php echo $product_array[$key]["amount"].$product_array[$key]["measureU"]; ?></div>
			<div class="margin_bottom"><?php echo "Создано: ".date('d-m-Y H:i:s', strtotime($product_array[$key]["createTime"])); ?></div>
			<div class="float_left"><?php echo "$".$product_array[$key]["price"]; ?></div>
			<div class="float_right"><input type="text" class="input_text" id="quantity<?php echo $product_array[$key]['id']; ?>" value="1" size="2" /><input type="button" value="Add to Cart" class="btnAddAction" onClick="processAdd(<?php echo $product_array[$key]["id"]; ?>);"/></div>
			</div>
		</div>
<?php
			}
		} else {
?>
<div class="section_note"><?php echo htmlspecialchars($error_add)." - ";?>Результатов не найдено</div>
<?php 
		}
?>