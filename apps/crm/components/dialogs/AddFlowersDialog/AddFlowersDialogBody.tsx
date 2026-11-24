'use client'

import {
  categories,
  colors,
  flowerVarieties,
  roseVarieties,
  units,
} from '@/data/FlowerVariantsData'
import type { FlowersForm } from '@sofiaflores/db/schemas/stock/flowers/FlowersFormSchema'
import { Check, ChevronDown } from '@sofiaflores/ui'
import { Button } from '@sofiaflores/ui/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@sofiaflores/ui/components/dropdown-menu'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@sofiaflores/ui/components/form'
import { Input } from '@sofiaflores/ui/components/input'
import { Textarea } from '@sofiaflores/ui/components/textarea'
import type { JSX } from 'react'
import { useFormContext } from 'react-hook-form'

export default function AddFlowersDialogBody(): JSX.Element {
  const { control } = useFormContext<FlowersForm>()
  return (
    <div className='flex flex-col gap-4'>
      {/* Product information */}
      <section className='flex flex-col gap-2'>
        <h3 className='font-medium text-sm'>Informações do produto</h3>

        <div className='grid grid-cols-3 gap-3'>
          {/* Name */}
          <FormField
            name='name'
            control={control}
            render={({ field }) => (
              <FormItem className='col-span-2'>
                <FormLabel>Nome da Flor</FormLabel>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <FormControl>
                      <Button
                        variant='outline'
                        className='w-full justify-between font-normal'
                      >
                        {field.value || 'Selecione uma flor...'}
                        <ChevronDown className='size-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align='start'
                    className='max-h-72 overflow-y-auto'
                  >
                    <DropdownMenuLabel>Flores</DropdownMenuLabel>
                    {flowerVarieties.map((flower) => (
                      <DropdownMenuItem
                        key={flower}
                        onSelect={() => field.onChange(flower)}
                      >
                        <Check
                          className={`size-4 ${
                            field.value === flower ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                        {flower}
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Rosas</DropdownMenuLabel>
                    {roseVarieties.map((rose) => (
                      <DropdownMenuItem
                        key={rose}
                        onSelect={() => field.onChange(rose)}
                      >
                        <Check
                          className={`size-4 ${
                            field.value === rose ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                        {rose}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            name='category'
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria</FormLabel>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant='outline'
                      className='w-full justify-between font-normal'
                    >
                      {categories.find(
                        (category) => category.value === field.value,
                      )?.label || 'Selecione'}
                      <ChevronDown className='size-4 opacity-50' />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align='start'>
                    {categories.map((category) => (
                      <DropdownMenuItem
                        key={category.value}
                        onSelect={() => field.onChange(category.value)}
                      >
                        <Check
                          className={`size-4 ${
                            field.value === category.value
                              ? 'opacity-100'
                              : 'opacity-0'
                          }`}
                        />
                        {category.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Color */}
          <FormField
            name='color'
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cor</FormLabel>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <FormControl>
                      <Button
                        variant='outline'
                        className='w-full justify-between font-normal'
                      >
                        {field.value || 'Selecione'}

                        <ChevronDown className='size-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align='start'>
                    {colors.map((color) => (
                      <DropdownMenuItem
                        key={color}
                        onSelect={() => field.onChange(color)}
                      >
                        <Check
                          className={`size-4 ${
                            field.value === color ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                        {color}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Variety */}
          <FormField
            name='variety'
            control={control}
            render={({ field }) => (
              <FormItem className='col-span-2'>
                <FormLabel>Detalhe / Variedade</FormLabel>
                <FormControl>
                  <Input placeholder='Ex: Avalanche, importada...' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </section>

      {/* Stock */}
      <section className='flex flex-col gap-2'>
        <h3 className='font-medium text-sm'>Quantidade e estoque</h3>

        <div className='grid grid-cols-3 gap-3'>
          {/* Quantity */}
          <FormField
            name='quantity'
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade</FormLabel>

                <FormControl>
                  <Input
                    type='number'
                    min={0}
                    placeholder='0'
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Unit */}
          <FormField
            control={control}
            name='unit'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unidade</FormLabel>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <FormControl>
                      <Button
                        variant='outline'
                        className='w-full justify-between font-normal'
                      >
                        {units.find((unit) => unit.value === field.value)
                          ?.label || 'Selecione'}

                        <ChevronDown className='size-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align='start'>
                    {units.map((unit) => (
                      <DropdownMenuItem
                        key={unit.value}
                        onSelect={() => field.onChange(unit.value)}
                      >
                        <Check
                          className={`size-4 ${
                            field.value === unit.value
                              ? 'opacity-100'
                              : 'opacity-0'
                          }`}
                        />
                        {unit.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Minimum stock */}
          <FormField
            control={control}
            name='minQuantity'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estoque mínimo</FormLabel>

                <FormControl>
                  <Input
                    type='number'
                    min={0}
                    placeholder='0'
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className='flex flex-col gap-2'>
        <h3 className='font-medium text-sm'>Valores</h3>
        <div className='grid grid-cols-4 gap-3'>
          {/* Cost price */}
          <FormField
            name='costPrice'
            control={control}
            render={({ field }) => (
              <FormItem className='col-span-2'>
                <FormLabel>Preço de compra</FormLabel>

                <FormControl>
                  <Input
                    type='number'
                    min={0}
                    step='0.01'
                    placeholder='0,00'
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Selling price */}
          <FormField
            control={control}
            name='sellingPrice'
            render={({ field }) => (
              <FormItem className='col-span-2'>
                <FormLabel>Preço de venda</FormLabel>

                <FormControl>
                  <Input
                    type='number'
                    min={0}
                    step='0.01'
                    placeholder='0,00'
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </section>

      {/* Supplier */}
      <section className='flex flex-col gap-2'>
        <h3 className='font-medium text-sm'>Fornecedor</h3>

        <FormField
          control={control}
          name='supplierId'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Fornecedor</FormLabel>

              <FormControl>
                <Input placeholder='Fornecedor' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </section>

      {/* Additional information */}
      <section className='flex flex-col gap-2'>
        <h3 className='font-medium text-sm'>Informações adicionais</h3>

        <FormField
          control={control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>

              <FormControl>
                <Textarea placeholder='Descrição do produto...' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name='notes'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Observações</FormLabel>

              <FormControl>
                <Textarea
                  placeholder='Observações sobre esta entrada...'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </section>
    </div>
  )
}
