import { PartialType } from '@nestjs/mapped-types';
import { CreateRecadoDto } from './create-recado.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateRecadoDto extends PartialType(CreateRecadoDto) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsBoolean()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  readonly lido?: boolean;
}
