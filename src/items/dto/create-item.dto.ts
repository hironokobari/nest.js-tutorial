import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateItemDto {
  @IsString() // 型の指定
  @IsNotEmpty() // 空欄はエラーにする
  @MaxLength(40) // 最大文字数は40
  name: string;

  @IsInt()
  @Min(1) // 最小値
  price: number;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;
}
